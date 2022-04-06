module.exports = {
    upload: {
      config: {
        provider: 'strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: 'intrinsic_bucket',
            publicFiles: false,
            uniform: true,
            serviceAccount:{
                "type": "service_account",
                "project_id": "intrinsic-app",
                "private_key_id": "a2efee5d10d9a3becc15da160287c017d2bd8968",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCy4dk2EoPmXauW\n2TiJ4XFVeVcdpj4mt5BwfOcX+JLKpF/0kOOJNJ6QhXxdGz2Cpgfz/WT8qv1u5Hxy\nD84wLsQp/s8FlARChpzu+7HY/vvNKgqek7BUeWu3H4r90ipcEXtIYD2ym8WOeqC+\naWukWTwvU0iUEHZeB73tAZDLVV6qh6roXHiSDq/Br43mURQRPwjqB5Q9/nfjf03Q\nj9GiRDlnZCTGmbV2SaT3gbqX65vghIIOz3kjV9FT+ZjZUZvuF+TbUArnE/wbpIAO\nrtZ3fhk7KaL+Zj+d5e2mwUUkn1YfzxvlduALvMVQQf0nLN//y53QHdIer8yHu74c\nX4ggR3PVAgMBAAECggEAUGVF+NHoewwlVtZI3Vs30xkGaLpzG3aL0aqpODJNUwr+\nX04RHXTLQRvlUXkxM3tIfsWnchGtdn31WlQ1MJ2MJ22wgIrOQVH7zULM40ByTfqz\nrCKncMfje/mOv9YJmLh4poYupIvzBb6iaQG7UbGTZZeyOm2NrWQgXZlDCMfVFKHD\nrpNWfihA5N1QPRM+u6Cgr+15+2huAjFWU+l9dz2gQxjtz1cp+Ph9kaJTBV7Dvm0A\njJ8oOxfTvy+aJ9TDzzLHD6G7DLuTeaeBIoWt4BxhR5M3dyby9dvJTBCIxzXIq/Tg\nhWj6K+Q2bwr54DJHHV9EFsl0Rp8P4qbeuzXBXIDWjwKBgQD1Pos61n6rScHLtbk9\n6M+7d9fieHC8TO18clGOgr2mBYPtQJmz5oi+rWUrLu3tNXpU6+MBOwgcC1tofJ0T\n8g5QhOzCjca+w1nscGGLNTyHJR71buArfTMkhSwTm7xiu9nFKiwV21GpuC/AA4a/\ntSnT9Au4uvBmKkUKdCbe5nlhlwKBgQC6ujsXvz/6aVn8qXfvwVE0ttnfTFBqdjr4\nGVyAI4/hOp+7aIcek5Yz7srRBiDivaZyiBbnwSo4JA38xmtGVaYoFlNWMugPwtAc\n2b1PK/ggCuvPaifrb7fbES8CqhQNvZitCe1meoATxh+OAbHbVlTkVmNqRDvxXChi\nhcBgTY3rcwKBgQD0gN2Y1J7HMSrYaR39Pi5Vbj87F+71nRCsoOD03x4q9pa4JE7Z\nUD8HM6KIsiod89I59k+FO5BzPVNt0cddSlfBKTVPJsB+Eg+GLejiPDpTVswNz/QJ\nB7LEd00hY4QnP7f23XvEcrtxJSPeIOXoHbtNCKPjEeV5Ri09Jd5XHprnkwKBgDD9\n6cE6SaP+/kA/iptaQl8tVo6y7CpyqNgtd0qbigWTJxO5wjHwkSlBDu+2xuwWzFQi\nhrf5w4UFWLIosT67/CNqcCUeqCpyd74KFxRtueVWWDaMaLrqDfgpUwdE7owIYcWM\n5D/OBkqp4d+VbD/bL9zVGbJpAr0569KluyrJTmInAoGAFt29bI4LQSO81ddlPqd3\neD+/avkgePweY+iZCPoCZVRsW5AzjbwWppjx7cwfZtF66j1xy/h71OfNoFdZXoya\n9Hq6H1djlEL38Zcu/PtV6r2M3/4aeuiP2q1vqSulFEiVwRtbVaqlcc9ndcaZMCPX\nBBo2k+5UYhwdMqDlQDc438k=\n-----END PRIVATE KEY-----\n",
                "client_email": "356301601980-compute@developer.gserviceaccount.com",
                "client_id": "108437925453971058360",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/356301601980-compute%40developer.gserviceaccount.com"
              }, 
            baseUrl: 'https://storage.googleapis.com/intrinsic_bucket',
            basePath: '',
        },
      },
    },
    //...
}