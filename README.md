# ~ Elasticsearch ~
Elasticsearch é um mecanismo de busca baseado na biblioteca Lucene. Ele fornece um mecanismo de pesquisa de texto completo distribuído e com capacidade para vários locatários, com uma interface da web HTTP e documentos JSON sem esquema.
##### API:
- Node JS;
- Typescript;
##### Conteúdo:
- API simples, apenas demonstrando como utilizar o Elasticsearch. Possui endpoints de CRUD e pesquisa parametrizada.
##### Como utilizar o elastic?
- Fazer download no link https://www.elastic.co/pt/downloads/elasticsearch;
- Descompactar arquivo e abrir no terminal;
- Executar o comando presente neste mesmo link.
##### Comandos úteis:
- O Elasticsearch é disponibilizado na porta 9200, sendo acessado localmente pelo endereço http://localhost:9200/
- Para consultar um index (nome da coleção) a partir da url, use a sintaxe: http://localhost:9200/{nome_index}
- Para deixar o JSON com um formato mais agradável apenas acrescente mais um parâmetro: http://localhost:9200/{nome_index}/?pretty=true