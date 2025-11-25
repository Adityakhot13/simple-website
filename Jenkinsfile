pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/Adityakhot13/website-for-jenkin.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t simple-web:%BUILD_NUMBER% .'
            }
        }

        stage('Deploy') {
            steps {
                bat """
                    docker stop simple-web || true
                    docker rm simple-web || true
                    docker run -d --name simple-web -p 8081:80 simple-web:%BUILD_NUMBER%
                """
            }
        }
    }
}
