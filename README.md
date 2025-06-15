# Simple Personal Website

This is a basic personal website with an about and contact section, perfect for deploying to AWS S3 and managing through GitHub.

## How to Use

### 1. Clone the Repo

```sh
git clone https://github.com/Mkpasha121/simple-website.git
cd simple-website
```

### 2. Edit Contact Information

Open `index.html` and confirm your email is correct:
```
<a href="mailto:mkpasha121@gmail.com">mkpasha121@gmail.com</a>
```

---

**Next Steps:**
- [How to push this to GitHub](#push-to-github)
- [How to deploy this to AWS S3](#deploy-to-aws-s3)

---
## Push to GitHub

1. **Create a repository** on GitHub named `simple-website`.

2. **Initialize git locally and push:**
   ```sh
   git init
   git remote add origin https://github.com/Mkpasha121/simple-website.git
   git add .
   git commit -m "Initial website"
   git branch -M main
   git push -u origin main
   ```

---

## Deploy to AWS S3

1. **Login to AWS Console > S3**
2. **Create a new S3 bucket** (must have a unique name)
3. **Enable Static Website Hosting** in the bucket properties
4. **Upload your files** (`index.html`, `style.css`, `script.js`)
5. **Set index document** as `index.html`
6. **(Optional)** Make the bucket public for web access
7. **Access your site** via the S3 website endpoint

---

**Questions?**  
Open an issue on GitHub or contact me!# simple-website
A simple personal website to deploy on AWS S3
