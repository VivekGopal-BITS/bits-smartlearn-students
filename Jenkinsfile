pipeline {
    agent {
        docker {
            image 'smart-learn-students-v1' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build Docker image') { 
            steps {
                sh 'npm install' 
				sh 'docker build -t smart-learn-students-v1 .'
            }
        }
    }
}