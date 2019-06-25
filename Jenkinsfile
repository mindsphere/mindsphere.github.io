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
    stage('Jekyll Build') {
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
        ls -la _site/
        '''
      }
    }
    stage('Publish to AWS') {
      when {
        branch 'master'
      }
      steps {
            withCredentials([usernamePassword(credentialsId: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_ACCESS_KEY_ID', usernameVariable: 'a'),
            usernamePassword(credentialsId: 'AWS_SECRET_ACCESS_KEY', passwordVariable: 'AWS_SECRET_ACCESS_KEY', usernameVariable: 'b'),
            usernamePassword(credentialsId: 'AWS_REGION', passwordVariable: 'AWS_REGION', usernameVariable: 'c'),
            usernamePassword(credentialsId: 'AWS_DEPLOYMENT_ID', passwordVariable: 'AWS_DEPLOYMENT_ID', usernameVariable: 'd'),
            usernamePassword(credentialsId: 'AWS_BUCKET', passwordVariable: 'AWS_BUCKET', usernameVariable: 'e')]) {

            sh '''
            cd /srv/jekyll/
            echo Deploying to s3://$AWS_BUCKET/
            aws s3 sync --delete _site/ s3://$AWS_BUCKET/
            aws cloudfront create-invalidation --distribution-id $AWS_DEPLOYMENT_ID --paths "/*"
            '''
          }
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
