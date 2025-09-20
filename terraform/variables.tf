variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "ap-south-1"
}

variable "bucket_name" {
  description = "S3 bucket name for hosting app"
  type        = string
  default     = "cross-border-platform"
}

variable "tags" {
  description = "app-hosting-bucket"
  type        = string
  default     = "dev"
}