pipeline {
    agent {
        docker {
            image 'node:13-alpine'
            args '-p 3060:3060'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
				echo "Building Docker image"
				sh 'docker build -t smart-learn-students-v1 .'
				echo "Listing docker images.."
				sh 'docker images'
            }
        }
        stage('Test') {
            steps {
                echo "Running test cases"
            }
        }
        stage('Deliver') { 
            steps {
                echo "Deploying docker image into EC2 instance" 
            }
        }
    }
}