import { Column, Entity, Index } from "typeorm";

@Index("tra_trecho_rodoviario_l_pkey", ["idObjeto"], { unique: true })
@Entity("tra_trecho_rodoviario_l", { schema: "bcim" })
export class TraTrechoRodoviarioL {
  @Column("integer", { primary: true, name: "id_objeto" })
  idObjeto: number;

  @Column("character varying", {
    name: "codtrechorodov",
    nullable: true,
    length: 25,
  })
  codtrechorodov: string | null;

  @Column("text", { name: "tipotrechorod", nullable: true })
  tipotrechorod: string | null;

  @Column("text", { name: "jurisdicao", nullable: true })
  jurisdicao: string | null;

  @Column("text", { name: "administracao", nullable: true })
  administracao: string | null;

  @Column("character varying", {
    name: "concessionaria",
    nullable: true,
    length: 100,
  })
  concessionaria: string | null;

  @Column("text", { name: "revestimento", nullable: true })
  revestimento: string | null;

  @Column("character varying", {
    name: "operacional",
    nullable: true,
    length: 12,
  })
  operacional: string | null;

  @Column("text", { name: "situacaofisica", nullable: true })
  situacaofisica: string | null;

  @Column("integer", { name: "nrpistas", nullable: true })
  nrpistas: number | null;

  @Column("integer", { name: "nrfaixas", nullable: true })
  nrfaixas: number | null;

  @Column("text", { name: "trafego", nullable: true })
  trafego: string | null;

  @Column("numeric", {
    name: "capaccarga",
    nullable: true,
    precision: 19,
    scale: 6,
  })
  capaccarga: string | null;

  @Column("geometry", { name: "geom", nullable: true })
  geom: string | null;

  @Column("integer", { name: "id_produtor", nullable: true })
  idProdutor: number | null;

  @Column("integer", { name: "id_elementoprodutor", nullable: true })
  idElementoprodutor: number | null;

  @Column("character varying", {
    name: "geometriaaproximada",
    nullable: true,
    length: 3,
  })
  geometriaaproximada: string | null;

  @Column("character varying", {
    name: "canteirodivisorio",
    nullable: true,
    length: 3,
  })
  canteirodivisorio: string | null;
}
