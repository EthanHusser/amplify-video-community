---
sidebar_label: Getting Started
---
# Deployment

## Requirements
* [AWS Account](https://aws.amazon.com/account/)
* [GitHub Account](https://github.com)
* [Node 14 or greater](https://nodejs.org/en/download/)
* [Amplify CLI 6.3.1 or greater installed and configured](https://aws-amplify.github.io/docs/cli-toolchain/quickstart#quickstart)
* [Amplify Video Plugin 3.8.2 or greater installed and configured](https://github.com/awslabs/amplify-video)


## Instructions
Follow these instructions to deploy the community site:

### Deploy using Amplify Console

1. Fork the community [website repository](https://github.com/aws-samples/amplify-video-community)

2. Go to Amplify console then click `New app -> Host web app`
3. Select Github and click `Continue`
![Host your web app](./images/host-your-webapp.png)
4. Select your repository and the target branch
    
    4.1. check "`Connecting a monorepo ? Pick a folder.`" and copy/paste:
    ```bash
    apps/community-website 
    ```
    4.2. click `Next`
    
    ![Add repository branch](./images/add-repo-branch.png)

5. Configure build settings
![Configure build settings](./images/build-settings.png)
6. Review build settings
![Review build settings](./images/review.png)
7. Provision, build and deploy your app
![Review build settings](./images/provision.png)
![Deployed](./images/done.png)

### Pull backend locally
To continue working on the backend, install the Amplify CLI and make updates by running the command below from the root of your project folder.

![Backend](./images/backend.png)

```bash
cd amplify-video-community/apps/community-website
```

```bash
amplify pull --appId <your-app-id> --envName <your-env>
```

### Create administrator account

1. Go to AWS Cognito (make sur you are in the correct region). Click `Manage User Pools`
![Cognito](./images/admin/cognito.png)

2. Select your user pool
![User pool](./images/admin/user-pool.png)

3. Click `Users and groups` 
![Users-Groups](./images/admin/users-groups.png)

4. Click `Create user`
![Users](./images/admin/users.png)
![Create user](./images/admin/create-user.png)

5. Select your created user
![User list](./images/admin/user-list.png)

6. Add to group
![Add to group](./images/admin/add-to-group.png)

7. Select Admin group and click `Add to group`
![Admin group](./images/admin/admin-group.png)

You can now visit your application using the link under `Front environments` 

`https://<your_env>.<app_id>.amplifyapp.com/admin`

![Link](./images/done.png)

![Link](./images/admin/log-in.png)

![Link](./images/admin/admin-panel.png)