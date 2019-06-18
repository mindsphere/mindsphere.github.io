pipeline {
  options { disableConcurrentBuilds() }
  agent {
    docker {
      image 'sn0wcat/builder'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Prepare Jekyll Build') {
      steps {

        sh '''
        rm -rf node_modules
        mv _data/ ../
        cd ..
        mv mindsphere.github.io docs
        jekyll build
        '''
      }
    }
    stage('Package') {
      steps {
        sh '''
        tar -zcvf mindsphere.github.io.tar.gz _site/
        '''
      }
    }
    stage('Archive Artifacts') {
      steps {
        archiveArtifacts '*.tgz'
      }
    }
  }
  environment {
    CI = 'true'
  }
}
