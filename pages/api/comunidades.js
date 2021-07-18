import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
        if(request.method === 'POST') {
          const TOKEN = 'ca9a8241522edcd24a694830cf248f';
          const client = new SiteClient(TOKEN);
          
          // Validar os dados, antes de sair cadastrando
          const registroCriado = await client.items.create({
              itemType: "976516", // ID do Model de "Communities" criado pelo Dato
              ...request.body,
              // title: "Comunidade de Teste",
              // imageUrl: "https://github.com/katharinefernandes.png",
              // creatorSlug: "katharinefernandes"
          })
      
          console.log(registroCriado);
      
          response.json({
              dados: 'Algum dado qualquer',
              registroCriado: registroCriado,
          })
          return;
        }
        res.status(404).json({
          message: 'Ainda não temos nada do GET, mas o POST tem'
        })
    }

    
