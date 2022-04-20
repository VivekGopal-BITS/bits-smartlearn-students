pipeline {
    agent {
        docker {
            image 'node:13-alpine'
        }
    }
    stages {
        stage('Build Docker image') { 
            steps {
                sh 'npm install'
				echo "Building Docker image"
				sh 'docker build -t smart-learn-students-v1 .'
				echo "Listing docker images.."
				sh 'docker images'
            }
        }
    }
}