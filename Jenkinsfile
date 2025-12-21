pipeline {
    agent any

    environment {
        IMAGE_NAME = "enchanted-portfolio"
        DOCKERHUB_REPO = "adityadakare01/enchanted-portfolio"
        SONAR_HOST_URL = "http://localhost:9000"
        SONAR_PROJECT_KEY = "enchanted-portfolio"
    }

    stages {

        stage('Checkout SCM') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Adityasanjaydakare/Main-Project.git'
            }
        }

        stage('Tool Install') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'docker --version'
            }
        }

        stage('Install Frontend') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Backend') {
            steps {
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'npm run build'
            }
        }

        stage('SonarQube Scan') {
  withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
    sh '''
      /opt/sonar-scanner/bin/sonar-scanner \
      -Dsonar.projectKey=enchanted-portfolio \
      -Dsonar.sources=src,server \
      -Dsonar.host.url=http://localhost:9000 \
      -Dsonar.login=$SONAR_TOKEN
    '''
  }
}
stage('SonarQube Scan (CLI)') {
            steps {
                withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
                    sh '''
                    sonar-scanner \
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
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker tag $IMAGE_NAME $DOCKERHUB_REPO:latest
                    docker push $DOCKERHUB_REPO:latest
                    '''
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@EC2_PUBLIC_IP << EOF
                        docker pull $DOCKERHUB_REPO:latest
                        docker stop enchanted || true
                        docker rm enchanted || true
                        docker run -d --name enchanted -p 80:3000 $DOCKERHUB_REPO:latest
                    EOF
                    '''
                }
            }
        }
    }
}
