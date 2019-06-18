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
        cp -R ./docs/ /srv/jekyll/
        cp -R ./_data/ /srv/jekyll/

        chown -R jekyll:jekyll /srv/jekyll/
        chmod +w /srv/jekyll

        cd /srv/jekyll/
        bundle update
        bundle exec jekyll build
        cp search.json _site/
        rm _site/Dockerfile
        ls -la _site/
        '''
      }
    }
    stage('Package') {
      steps {
        sh '''
        cp -R /srv/jekyll/_site/ .
        tar -zcvf mindsphere.github.io.tgz ./_site/
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
