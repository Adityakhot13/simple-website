pipeline { 
    agent any 
 
    stages { 
        stage('Checkout') { 
            steps { 
                git 'https://github.com/Adityakhot13/simple-website.git' 
            } 
        } 
 
        stage('Build') { 
            steps { 
                echo 'Building the app...' 
            } 
        } 
 
        stage('Test') { 
            steps { 
                echo 'Running tests...' 
            } 
        } 
 
        stage('Deploy') { 
            steps { 
                echo 'Deploying to server...' 
            } 
        } 
    } 
}
