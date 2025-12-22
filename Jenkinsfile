pipeline {
    agent any

    environment {
        SONAR_HOST_URL = "http://localhost:9000"
        SONAR_PROJECT_KEY = "enchanted-portfolio"
        DOCKER_IMAGE = "adityadakare01/enchanted-portfolio"
    }

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Tool Check') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'docker --version'
            }
        }

        stage('Install & Test Frontend') {
            steps {
                sh '''
                  npm install
                  npm test || true
                '''
            }
        }

        stage('Install & Test Backend') {
            steps {
                dir('server') {
                    sh '''
                      npm install
                      npm test || true
                    '''
                }
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
                    sh '''
                      /opt/sonar-scanner/bin/sonar-scanner \
                      -Dsonar.projectKey=$SONAR_PROJECT_KEY \
                      -Dsonar.sources=src,server \
                      -Dsonar.host.url=$SONAR_HOST_URL \
                      -Dsonar.token=$SONAR_TOKEN
                    '''
                }
            }
        }

        stage('Quality Gate (Manual Check)') {
            steps {
                withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
                    sh '''
                      echo "Waiting for SonarQube Quality Gate..."
                      sleep 15
                      STATUS=$(curl -s -u $SONAR_TOKEN: \
                        "$SONAR_HOST_URL/api/qualitygates/project_status?projectKey=$SONAR_PROJECT_KEY" \
                        | jq -r .projectStatus.status)

                      echo "Quality Gate Status: $STATUS"

                      if [ "$STATUS" != "OK" ]; then
                        echo "❌ Quality Gate Failed"
                        exit 1
                      fi

                      echo "✅ Quality Gate Passed"
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                  docker build -t $DOCKER_IMAGE:latest .
                '''
            }
        }

        stage('Push Docker Image to DockerHub') {
            steps {
                withCredentials([
                    string(credentialsId: 'docker-user', variable: 'DOCKER_USER'),
                    string(credentialsId: 'docker-pass', variable: 'DOCKER_PASS')
                ]) {
                    sh '''
                      echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                      docker push $DOCKER_IMAGE:latest
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ PIPELINE COMPLETED SUCCESSFULLY'
        }
        failure {
            echo '❌ PIPELINE FAILED'
        }
    }
}
