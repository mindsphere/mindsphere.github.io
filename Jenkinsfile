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
        cp -R . /srv/jekyll/docs
        chown jekyll:jekyll /srv/jekyll/docs
        cd /srv/jekyll/docs
        mv /srv/jekyll/docs/_data /srv/jekyll/
        cf /srv/jekyll/
        ls -la
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
