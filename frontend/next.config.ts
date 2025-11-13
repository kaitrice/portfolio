import type { NextConfig } from "next"
import createMDX from '@next/mdx'
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marcom.wwu.edu',
        port: '',
        pathname: '/sites/marcom.wwu.edu/files/2021-01/WWU_MakeWaves_Stacked_RGB%20%281%29.png',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'skillpointe.com',
        port: '',
        pathname: '/sites/default/files/styles/medium/public/institution_images/logos/cascadiac_logo.jpg',
        search: '',
      },
    ],
	},
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withFlowbiteReact(withMDX(nextConfig))