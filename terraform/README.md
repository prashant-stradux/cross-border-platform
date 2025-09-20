# Cross-Border Platform - Terraform Infrastructure

This directory contains the Terraform configuration for deploying the Cross-Border Platform infrastructure on AWS.

## 🏗️ Infrastructure Overview

The infrastructure includes:
- **S3 Bucket**: Static website hosting for the Angular application
- **CloudFront Distribution**: Global CDN with HTTPS
- **DynamoDB Table**: Terraform state locking
- **Origin Access Control**: Secure S3-CloudFront integration

## 📋 Prerequisites

1. **AWS CLI** configured with appropriate credentials
2. **Terraform** >= 1.5.0 installed
3. **AWS Account** with permissions to create:
   - S3 buckets
   - CloudFront distributions
   - DynamoDB tables
   - IAM policies

## 🚀 Deployment Process

### Step 1: Initial Setup (First Time Only)

#### 1.1 Configure Variables
Edit `variables.tf` to set your preferred values:
```hcl
variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "ap-south-1"  # Change as needed
}

variable "bucket_name" {
  description = "S3 bucket name for hosting app"
  type        = string
  default     = "cross-border-platform"  # Must be globally unique
}
```

#### 1.2 Deploy Infrastructure (Local State)
```bash
# Initialize Terraform (without backend)
terraform init

# Review the plan
terraform plan

# Apply the infrastructure
terraform apply
```

**Expected Output:**
```
cloudfront_domain_name = "d1s3a02p62t54g.cloudfront.net"
s3_bucket_name = "cross-border-platform"
```

### Step 2: Configure Remote State Backend

#### 2.1 Update Backend Configuration
Uncomment the backend configuration in `backend.tf`:
```hcl
terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "cross-border-platform"  # Use your bucket name
    key            = "infra/app-hosting/terraform.tfstate"
    region         = "ap-south-1"  # Use your region
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}
```

#### 2.2 Migrate State to Remote Backend
```bash
# Upload current state to S3
aws s3 cp terraform.tfstate s3://cross-border-platform/infra/app-hosting/terraform.tfstate --region ap-south-1

# Reconfigure Terraform to use remote backend
terraform init -reconfigure
```

#### 2.3 Verify Remote State
```bash
# Check outputs (should work with remote state)
terraform output

# Verify state file in S3
aws s3 ls s3://cross-border-platform/infra/app-hosting/ --region ap-south-1
```

## 🔧 Common Commands

### Infrastructure Management
```bash
# Plan changes
terraform plan

# Apply changes
terraform apply

# Destroy infrastructure (⚠️ Use with caution)
terraform destroy

# View current state
terraform show

# List resources
terraform state list
```

### State Management
```bash
# View outputs
terraform output

# Import existing resource
terraform import aws_s3_bucket.example bucket-name

# Remove resource from state
terraform state rm aws_s3_bucket.example
```

## 📁 File Structure

```
terraform/
├── backend.tf          # Backend configuration
├── main.tf            # Main infrastructure resources
├── variables.tf       # Input variables
├── outputs.tf         # Output values
├── README.md          # This file
└── terraform.tfstate  # Local state (before migration)
```

## 🌐 Accessing Your Application

After deployment, your application will be available at:
- **CloudFront URL**: `https://d1s3a02p62t54g.cloudfront.net`
- **S3 Bucket**: `cross-border-platform`

## 🔒 Security Features

- **S3 Public Access Block**: Prevents accidental public access
- **Origin Access Control**: Secure CloudFront-S3 communication
- **HTTPS Redirect**: All traffic redirected to HTTPS
- **Encrypted State**: Terraform state encrypted in S3

## 🚨 Troubleshooting

### Backend Migration Issues
If you encounter issues with state migration:

1. **Interactive Prompt Problem**:
   ```bash
   # Manual state upload (PowerShell)
   aws s3 cp terraform.tfstate s3://your-bucket/path/terraform.tfstate --region your-region
   terraform init -reconfigure
   ```

2. **Bucket Doesn't Exist**:
   - Ensure the bucket name in `backend.tf` matches the one created by Terraform
   - Check AWS region consistency

3. **Permission Issues**:
   - Verify AWS credentials have S3, CloudFront, and DynamoDB permissions
   - Check bucket policy allows Terraform access

### Common Errors

**Error**: `S3 bucket does not exist`
**Solution**: Create infrastructure first with local state, then migrate

**Error**: `Access Denied`
**Solution**: Check AWS credentials and permissions

**Error**: `Bucket name already taken`
**Solution**: Change bucket name in `variables.tf`

## 📝 Notes

- **Bucket Names**: Must be globally unique across all AWS accounts
- **Regions**: CloudFront is global, but S3 bucket region affects performance
- **Costs**: CloudFront and S3 have usage-based pricing
- **State Locking**: DynamoDB table prevents concurrent modifications

## 🔄 Future Updates

To update infrastructure:
1. Modify Terraform files
2. Run `terraform plan` to review changes
3. Run `terraform apply` to implement changes
4. State is automatically saved to S3 backend

## 📞 Support

For issues or questions:
1. Check AWS CloudTrail for detailed error logs
2. Verify Terraform state with `terraform show`
3. Review AWS service limits and quotas
4. Check network connectivity and AWS service status

---

**Last Updated**: September 2024  
**Terraform Version**: >= 1.5.0  
**AWS Provider Version**: ~> 5.0