# Deploying to Vercel

## Steps
1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings
4. Set environment variables
5. Deploy

## Configuration (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev"
}
```
