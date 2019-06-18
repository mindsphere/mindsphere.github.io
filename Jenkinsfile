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
        chown -R jekyll:jekyll /srv/jekyll/
        chmod 777 /srv/jekyll
        cd /srv/jekyll/docs
        rm -rf node_modules
        mv /srv/jekyll/docs/_data /srv/jekyll/
        cd /srv/jekyll/
        ls -la
        jekyll build .
        '''
      }
    }
    stage('Package') {
      steps {
        sh '''
        tar -zcvf mindsphere.github.io.tgz /srv/jekyll/_site/
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
