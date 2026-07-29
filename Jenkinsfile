pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ravikantkhare/my-playwright-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}