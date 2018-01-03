pipeline {
    agent {
        docker {
            image 'node'
        }
    }

    environment {
        CI = true
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build React') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Publish React') {
            when {
                branch 'master'
            }
            steps {
                publishHTML target: [
                    allowMissing         : false,
                    alwaysLinkToLastBuild: false,
                    keepAll              : true,
                    reportDir            : 'build',
                    reportFiles          : 'index.html',
                    reportName           : 'React app'
                ]
            }
        }
    }
}