pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                nodejs('Node-16.2.0') {
                    sh 'npm install'
                    sh 'npm run build'
                }
                echo 'BUILD'
            }
        }
        stage("test") {
            steps {
                echo "TEST"
            }
        }
        stage("deploy") {
            steps {
                echo "DEPLOY"
            }
        }
    }
}