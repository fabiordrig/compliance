import express, { Request, Response } from "express";
import { Mte } from "../crawler/mte/mte";
import { MteFormatter } from '../formatter/mte'
import axios, { AxiosResponse } from 'axios'


const router = express.Router();

router.post("/crawler", async (req: Request, res: Response) => {
  const { identityNumbers } = req.body;
  // const fileUrl = 'https://d37iydjzbdkvr9.cloudfront.net/arquivos/2019/01/21/cadastro-de-empregadores-2019-1-17.pdf'
  // const mte = new Mte(fileUrl);
  // const blob = await mte.download()
  // const formatter = new MteFormatter()
  //


  res.send({ status: 200 });
});

router.get("/report/:identityNumber", async (req: Request, res: Response) => {
  const { identityNumber } = req.params;
  // const fileUrl = 'https://d37iydjzbdkvr9.cloudfront.net/arquivos/2019/01/21/cadastro-de-empregadores-2019-1-17.pdf'
  // const mte = new Mte(fileUrl);
  // const blob = await mte.download()
  // const formatter = new MteFormatter()
  //
  // 13831526249
  const getReportId = () => {
    switch (identityNumber) {
      case '40892421851':

        return '32386506-411c-45d9-a6fa-019a6aa6afff';
      case '09511113100':

        return '32386506-411c-45d9-a6fa-019a6aa6afff';

      default:
        return 'c94cce27-c6af-4f7f-aa97-2eaf94d94c88';
    }
  }

  const url = `https://apis-alpha.terramagna.com.br/api/producers/checkups/${getReportId()}/info`
  console.log(getReportId());

  const response: AxiosResponse<any> = await axios.get(url, {
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJhdWQiOiJ0ZXJyYW1hZ25hLWZpZGVzLWlhbS1zZXJ2aWNlIiwiZXhwIjoxNjM1MjgyOTI4LCJpc3MiOiJ0ZXJyYW1hZ25hLWZpZGVzLWlhbS1zZXJ2aWNlIiwibmJmIjoxNjM1MTk2NTI4LCJub25jZSI6Ijd4eVY4aTNnS1p3T1RnWU4iLCJ0b2tlbiI6InVBSk01MFpEeklFNVo0ZVUrb2J6R1BwNlBFWVgvazM5TFk4M1FtOTB4Qk1Td3VuZEJEbmJwQzBLdnF6QXhhV2J3clltRWJVellKRDJBL3pMejZCNlppY05BRkN2YjE1VHNFNXczSkgxNFdqNGhRQnZheTlKYkFlMUJRNTNVMU90U21UaXhnMXNjOS8vQzVhSzFZQVpNR2pZd1dIeE1QeE5WbWlGcGxjU0o0WG5ZREt4Qm5CM3JUUlJydVlyMWZ4T1V1cllTVXZPYmtuM1l6cHdNUG9BU2lHZmZPb2VDNUg3T3JUN0hxNjdqV1VjQVRydUhZZUR0RkZYSXFuKzRqSmJhWXBKYldPSFhDaGhsVTloaVh4eEV1a0U0MEswNmhxdnZJSlRuaU9VTm9qNEl3UG1sbXlDRkdGMWtxSEQzQ3ZYOVdBdVFUNXp3SEVvSDZNNU9kTDZwRzFxeml6UFlITXlNZkVtdjAySElMNm9xaWt4dGwrMmV2cFl2UWxUemtjTDhoRDIzS0FkM29EY3BxNzFNRHJFU2NZc2lzdnRiMVY0ckl1a3NnUnVVc0o0ZTJsSEhzSVFxT3pJejlieGtzZDk2Mk4vQVhSUEZ2UTN3QXdiUEgwR1FQa3hvSnJTMExTUGx3d1ZzQ2hUQW51a0lqV0J2d0JSU0pTSjZMWlNRUzVkcmxKajY1bz0ifQ.ofmazwtgu9bTp-ezphZi3Rmd28HE431u488BFiucTTyhKsMMrWyUQ4Dv5JTVMKJV',
    }
  })

  const compliances = response.data.compliances;



  res.send({ status: 200, compliances });
});

export { router as getDataRouter };
