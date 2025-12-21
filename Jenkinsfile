pipeline {
    agent any

    environment {
        SONAR_PROJECT_KEY = 'enchanted-portfolio'
        SONAR_HOST_URL = 'http://localhost:9000'
        DOCKER_IMAGE = 'adityadakare01/enchanted-portfolio'
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
                    sh '''
                        /opt/sonar-scanner/bin/sonar-scanner \
                        -Dsonar.projectKey=$SONAR_PROJECT_KEY \
                        -Dsonar.sources=src,server \
                        -Dsonar.host.url=$SONAR_HOST_URL \
                        -Dsonar.login=$SONAR_TOKEN
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
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $DOCKER_IMAGE:latest
                    '''
                }
            }
        }

        stage('Deploy to AWS EC2') {
            steps {
                withCredentials([sshUserPrivateKey(
                    credentialsId: 'ec2-ssh-key',
                    keyFileVariable: 'SSH_KEY',
                    usernameVariable: 'SSH_USER'
                )]) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no -i $SSH_KEY $SSH_USER@<EC2_PUBLIC_IP> "
                        docker pull $DOCKER_IMAGE:latest &&
                        docker stop portfolio || true &&
                        docker rm portfolio || true &&
                        docker run -d --name portfolio -p 80:80 $DOCKER_IMAGE:latest
                        "
                    '''
                }
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
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check logs.'
        }
    }
}
