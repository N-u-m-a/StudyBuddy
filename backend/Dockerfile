# --- Stage 1: Install Dependencies ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

# --- Stage 2: Production Runner ---
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app /app

EXPOSE 5000

# Replace 'index.js' with your backend entry point if different (e.g., 'server.js')
CMD ["node", "index.js"]