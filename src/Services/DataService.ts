import * as express from "express";
import { Client } from "@elastic/elasticsearch";
import { v4 as uuidv4 } from 'uuid';
import bodybuilder from 'bodybuilder';

export interface ResponseSearch {
  statusCode: number;
  message?: string;
  error?: string;
  data?: {};
};

export interface Filter {
  term?: string
}

const elasticSearchOptions: any = {
  node: process.env.ELASTIC_SEARCH
};

const client = new Client(elasticSearchOptions);

export class DataService {

  private GetPosition() {
    const random = Math.floor(Math.random() * 3);
    const positions: any = {
      0: "Backend",
      1: "Frontend",
      2: "Full Stack"
    };

    return positions[random];
  }

  private MountQuery(filter: Filter) {
    const { term } = filter;
    const body = bodybuilder();

    if (term)
      body.query('match', 'position', term);

    return body;
  }

  public async Search(req: express.Request, res: express.Response) {

    const response = {} as ResponseSearch;

    const filter: Filter = {
      term: req.query.term?.toString()
    }

    try {

      const result = await client.search({
        index: "user",
        body: this.MountQuery(filter).build()
      });

      response.message = "Pesquisado com sucesso!";
      response.statusCode = 200;
      response.data = result?.body?.hits;

    } catch (e) {
      response.error = "Erro ao criar.";
      response.statusCode = 500;
    }

    return response;
  }

  public async Create(req: express.Request, res: express.Response) {

    const response = {} as ResponseSearch;

    try {

      const result = await client.index({
        index: "user",
        id: uuidv4(),
        body: {
          title: "Lucas Fernando",
          position: this.GetPosition()
        },
      });

      response.message = "Criado com sucesso!";
      response.statusCode = 200;
      response.data = result;

    } catch (e) {
      response.error = "Erro ao criar.";
      response.statusCode = 500;
    }

    return response;
  }

  public async Delete(req: express.Request, res: express.Response) {

    const response = {} as ResponseSearch;

    try {

      const result = await client.delete({
        index: "user",
        id: req.params.id
      });

      response.message = "Deletado com sucesso!";
      response.statusCode = 200;
      response.data = result;

    } catch (e) {
      response.error = "Erro ao deletar.";
      response.statusCode = 500;
    }

    return response;
  }

  public async Get(req: express.Request, res: express.Response) {

    const response = {} as ResponseSearch;

    try {

      const result = await client.get({
        index: "user",
        id: req.params.id,
      });

      response.message = "Buscado com sucesso!";
      response.statusCode = 200;
      response.data = result;

    } catch (e) {
      response.error = "Erro ao realizar busca.";
      response.statusCode = 500;
    }

    return response;
  }

};