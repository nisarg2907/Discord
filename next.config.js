/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "utfs.io"
        ]
    }
}
module.exports = {
    experimental: {
      serverComponents: false,
    },
  };
  

module.exports = nextConfig
