pipeline {
  agent any
  options {
    ansiColor('xterm')
  }
  stages {
    stage('Install dependencies') {
      steps {
        echo 'Installing..'
        sh 'make install'
      }
    }
    stage('Test') {
      steps {
        withEnv(["JEST_JUNIT_OUTPUT=./test-results.xml"]) {
          echo 'Testing...'
          sh 'make test'
        }
        junit 'test-results.xml'
      }
    }
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'make build'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Synchronizing..'
        sh 'make sync-cds'
      }
    }
  }
  post {
    always {
      echo 'Deleting workspace..'
      sh 'sudo chown -R $(id -u):$(id -g) ${WORKSPACE}'
      deleteDir()
    }
    failure {
      echo 'Hubo un error..'
    }
  }
}
