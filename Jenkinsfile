pipeline {
    agent any

    environment {
        IMAGE_NAME = "enchanted-portfolio"
        DOCKERHUB_REPO = "adityadakare01/enchanted-portfolio"
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

        stage('Install & Test Frontend') {
            steps {
                sh 'npm install'
                sh 'npm test || true'
            }
        }

        stage('Install & Test Backend') {
            steps {
                dir('server') {
                    sh 'npm install'
                    sh 'npm test || true'
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
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
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
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker tag $IMAGE_NAME $DOCKERHUB_REPO:latest
                    docker push $DOCKERHUB_REPO:latest
                    '''
                }
            }
        }

        stage('Deploy to AWS EC2') {
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

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: '**/coverage/**', allowEmptyArchive: true
            }
        }
    }
}
