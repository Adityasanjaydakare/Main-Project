FROM node:18

# =========================
# 1️⃣ Build Frontend
# =========================
WORKDIR /app

# Copy frontend package files
COPY package*.json ./
RUN npm install

# Copy frontend source
COPY src ./src
COPY public ./public
COPY index.html .
COPY vite.config.ts .
COPY tsconfig*.json .
COPY postcss.config.js .
COPY tailwind.config.ts .
COPY eslint.config.js .

# Build frontend (creates dist/)
RUN npm run build


# =========================
# 2️⃣ Setup Backend
# =========================
WORKDIR /app/server

# Copy backend package files
COPY server/package*.json ./
RUN npm install

# Copy backend source
COPY server ./

# =========================
# 3️⃣ Run Application
# =========================
EXPOSE 3000

CMD ["node", "index.js"]
