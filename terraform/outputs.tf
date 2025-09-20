output "s3_bucket_name" {
  description = "S3 bucket used for app hosting"
  value       = aws_s3_bucket.app_bucket.bucket
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.app_distribution.domain_name
}
