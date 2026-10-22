# OZOYO: do ZIP ao site no ar

Este pacote contém o código editável do site, as fotos, os logos, os vídeos e os downloads.
Ele não precisa de servidor, banco de dados, conta, chave ou publicação do Replit.
O visual e o conteúdo foram preservados.

## Antes de começar

- Faça isso em um computador Windows ou Mac.
- Você vai precisar de contas no GitHub e na Vercel.
- Não envie o ZIP fechado para o GitHub: primeiro extraia os arquivos.
- Use o GitHub Desktop. Um vídeo tem aproximadamente 40 MB e não cabe no envio de arquivos pelo navegador do GitHub.
- Não apague nem desligue sua hospedagem antiga antes de verificar o novo site.
- Este guia não contrata serviços e não autoriza cobranças. Confira as condições e os limites da Vercel, inclusive a elegibilidade do plano Hobby para o uso que você fará. Não presuma que uso comercial seja gratuito.

## 1. Abra o pacote

1. Baixe `ozoyo-vercel.zip`.
2. No Windows: clique com o botão direito e escolha **Extrair tudo**.
3. No Mac: dê dois cliques no ZIP.
4. Abra a pasta `ozoyo-vercel`.
5. Você deve enxergar `package.json`, `index.html`, `vercel.json`, `src` e `public`.
6. Guarde essa pasta em um lugar fácil de encontrar.

## 2. Instale o GitHub Desktop

1. Entre em https://desktop.github.com/.
2. Baixe e instale o aplicativo.
3. Abra o aplicativo.
4. Clique em **Sign in to GitHub.com** e entre na sua conta.
5. Se ele perguntar nome e e-mail para identificar as alterações, siga as instruções da sua conta.

## 3. Coloque o site no GitHub

1. No GitHub Desktop, abra **File > New repository**.
2. Em **Name**, escreva `ozoyo-site`.
3. Em **Local path**, escolha um lugar fácil, como Documentos.
4. Deixe Git ignore e License como **None**. Pode deixar a opção de criar README desmarcada.
5. Clique em **Create repository**.
6. Clique em **Repository > Show in Explorer** no Windows ou **Show in Finder** no Mac.
7. Uma pasta nova chamada `ozoyo-site` vai abrir.
8. Volte à pasta extraída `ozoyo-vercel`.
9. Copie TODO o conteúdo dela para dentro da pasta nova `ozoyo-site`.
10. Importante: `package.json` deve ficar diretamente dentro de `ozoyo-site`, e NÃO dentro de uma segunda pasta `ozoyo-vercel`.
11. Volte ao GitHub Desktop. Os arquivos devem aparecer na lista de alterações.
12. No campo **Summary**, escreva `Adicionar site OZOYO`.
13. Clique em **Commit to main** (o nome do botão pode variar conforme o nome da sua branch).
14. Clique em **Publish repository**.
15. Pode deixar **Keep this code private** marcado. A Vercel precisará de permissão para ler esse repositório.
16. Confirme em **Publish repository** e espere terminar.
17. Em **Repository > View on GitHub**, confira se aparecem as pastas `src` e `public` e o arquivo `package.json`.

Se aparecer uma mensagem de arquivo grande para o vídeo de 40 MB, ela pode ser um aviso. O pacote não contém arquivos acima de 100 MB. Se algum envio falhar, não apague o vídeo: veja a mensagem antes de continuar.

## 4. Conecte a Vercel

1. Abra https://vercel.com/.
2. Crie sua conta ou entre na que você já tem. Você pode usar **Continue with GitHub**.
3. No painel, procure **Add New > Project** (ou **New Project**).
4. Na lista de repositórios do GitHub, procure `ozoyo-site`.
5. Se ele não aparecer, use **Adjust GitHub App Permissions** ou **Install** e permita acesso a esse repositório.
6. Clique em **Import** ao lado de `ozoyo-site`.
7. Confira:
   - **Framework Preset:** Vite.
   - **Root Directory:** a raiz do repositório, normalmente `./` (não escolha `src` nem `public`).
   - **Install Command:** `pnpm install --frozen-lockfile`.
   - **Build Command:** `pnpm run build`.
   - **Output Directory:** `dist`.
8. O arquivo `vercel.json` já fornece as configurações. Só preencha manualmente se a tela pedir.
9. Use Node.js 22 ou uma versão LTS mais nova compatível.
10. Não precisa configurar senha, chave de API, banco ou variável de ambiente para a publicação normal.
11. Antes de confirmar, verifique o plano, a permissão de uso e qualquer cobrança indicada pela Vercel.
12. Clique em **Deploy** e aguarde.

## 5. Abra e confira

1. Quando terminar, clique em **Visit**.
2. Salve o endereço que a Vercel criou para você.
3. Abra a página inicial e confira o menu.
4. Abra o media kit.
5. Atualize a página do media kit com F5: ela deve continuar abrindo.
6. Abra as fotos e teste o download de um logo, uma foto e do vídeo.
7. Confira o site no celular.
8. Teste o player do YouTube e os links de contato.
9. Compartilhe o NOVO endereço no WhatsApp. A atualização da prévia depende também do cache do WhatsApp.

O novo endereço não é o endereço antigo. Você deve compartilhar o endereço da Vercel ou configurar um domínio próprio.

## 6. Independência da hospedagem antiga

Depois de conferir tudo na Vercel, você pode desligar a publicação antiga.
O novo site continuará funcionando: os arquivos são servidos pela Vercel e o código fica no GitHub.
Desligar a publicação antiga não muda mensagens antigas nem redireciona automaticamente o endereço antigo.
YouTube, Google Fonts, WhatsApp, SoundCloud e Instagram continuam sendo serviços externos usados pelo site; nenhum deles depende do Replit.

## 7. Como atualizar no futuro

1. Edite os arquivos na pasta `ozoyo-site` do seu computador.
2. Abra o GitHub Desktop.
3. Escreva um resumo da alteração.
4. Clique em **Commit to main**.
5. Clique em **Push origin**.
6. Com a integração ativa, a Vercel fará uma nova publicação automaticamente.

## Se você quiser um domínio próprio

1. Na Vercel, entre no projeto e abra **Settings > Domains**.
2. Adicione o domínio e siga as instruções de DNS exibidas pela Vercel.
3. Se a imagem de compartilhamento ainda usar o domínio anterior, em **Settings > Environment Variables** adicione `SITE_URL` com o endereço completo, por exemplo `https://seu-dominio.com.br`.
4. Marque o ambiente Production e faça um novo deploy.

Essa variável é opcional e não é uma senha. O pacote já usa automaticamente o endereço de produção informado pela Vercel.

## Para quem for editar o código

- Projeto React + Vite + TypeScript, sem backend.
- Instalar: `corepack pnpm install --frozen-lockfile` (com Corepack disponível), ou use pnpm 10.28.0.
- Rodar localmente: `pnpm dev`.
- Conferir tipos: `pnpm typecheck`.
- Compilar: `pnpm build`.
- Conferir compilação local: `pnpm preview`.
- Resultado da compilação: `dist/`.
- Arquivos públicos e downloads: `public/`.
- A rota `/media-kit` é atendida pelo rewrite do `vercel.json`.
- As informações de compartilhamento estão no `index.html`; o domínio é preenchido durante a compilação pelo `vite.config.ts`.
- Não é necessário subir `node_modules`, `dist`, `.env` ou o ZIP.
