This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
To install the latest version of Node.js on your Linux system, you can follow these steps:

1. Open a terminal window.

2. Update your package repository information to ensure you have the latest information about available packages:
   
   ```sh
   sudo apt update
   ```

   Note: The above command is specific to Debian-based systems (such as Ubuntu). If you are using a different Linux distribution, you may need to use a different package manager, such as `yum` for CentOS or Fedora.

3. Install Node.js using NodeSource's Node.js Binary Distributions:

   NodeSource provides a Node.js Binary Distribution that is frequently updated with the latest versions. You can use their repository to install Node.js.

   Run the following commands to install Node.js and npm (Node.js package manager):

   ```sh
   # Install required packages
   sudo apt install curl

   # Download and run the Node.js setup script for the LTS version (14.x)
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

   # Install Node.js and npm
   sudo apt install -y nodejs
   ```

   Note: You can replace `lts` with `current` in the setup URL to install the latest stable version instead of the LTS version.

4. Verify the installation by checking the Node.js and npm versions:

   ```sh
   node -v
   npm -v
   ```

   You should see the version numbers of Node.js and npm printed to the terminal.

That's it! You've successfully installed the latest version of Node.js on your Linux system. You can now use Node.js to run JavaScript applications, including the code you provided earlier.

Keep in mind that the instructions above are specific to Debian-based systems (such as Ubuntu). If you're using a different Linux distribution, you may need to use a different package manager and adjust the installation commands accordingly.
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
