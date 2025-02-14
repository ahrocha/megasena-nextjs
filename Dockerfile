# Use a imagem oficial do Node.js como base
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o container
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia todos os arquivos do projeto para o container
COPY . .

# Compila a aplicação Next.js para produção
RUN npm run build

# Usa uma imagem mais leve para rodar a aplicação
FROM node:20-alpine AS runner

WORKDIR /app

# Copia apenas os arquivos necessários do estágio anterior
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules

# Define a variável de ambiente para produção
ENV NODE_ENV=production

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para rodar a aplicação Next.js
CMD ["npm", "run", "start"]
