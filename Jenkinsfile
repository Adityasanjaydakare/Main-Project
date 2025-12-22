pipeline {
    agent any

    environment {
        SONAR_SCANNER = "/opt/sonar-scanner/bin/sonar-scanner"
        SONAR_HOST_URL = "http://localhost:9000"
        SONAR_PROJECT_KEY = "enchanted-portfolio"

        DOCKER_IMAGE = "adityadakare01/enchanted-portfolio"
    }

    stages {

        stage('Checkout SCM') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Adityasanjaydakare/Main-Project.git'
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
                    sh """
                      ${SONAR_SCANNER} \
                      -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                      -Dsonar.sources=src,server \
                      -Dsonar.host.url=${SONAR_HOST_URL} \
                      -Dsonar.token=${SONAR_TOKEN}
                    """
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:latest ."
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
                      docker push '"$DOCKER_IMAGE"':latest
                    '''
                }
            }
        }

        stage('Deploy to AWS EC2') {
            steps {
                echo "🚀 Deployment step (add SSH / Docker run here)"
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: '**/dist/**', allowEmptyArchive: true
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline completed successfully"
        }
        failure {
            echo "❌ Pipeline failed. Check logs."
        }
    }
}
