import { Column, Entity, Index } from "typeorm";

@Index("lim_unidade_uso_sustentavel_a_pkey", ["idObjeto"], { unique: true })
@Entity("lim_unidade_uso_sustentavel_a", { schema: "bcim" })
export class LimUnidadeUsoSustentavelA {
  @Column("integer", { primary: true, name: "id_objeto" })
  idObjeto: number;

  @Column("character varying", { name: "nome", nullable: true, length: 100 })
  nome: string | null;

  @Column("character varying", {
    name: "nomeabrev",
    nullable: true,
    length: 50,
  })
  nomeabrev: string | null;

  @Column("character varying", {
    name: "geometriaaproximada",
    nullable: true,
    length: 3,
  })
  geometriaaproximada: string | null;

  @Column("integer", { name: "anocriacao", nullable: true })
  anocriacao: number | null;

  @Column("character varying", { name: "sigla", nullable: true, length: 6 })
  sigla: string | null;

  @Column("character varying", {
    name: "areaoficial",
    nullable: true,
    length: 15,
  })
  areaoficial: string | null;

  @Column("text", { name: "administracao", nullable: true })
  administracao: string | null;

  @Column("character varying", {
    name: "atolegal",
    nullable: true,
    length: 100,
  })
  atolegal: string | null;

  @Column("character varying", {
    name: "tipounidusosust",
    nullable: true,
    length: 100,
  })
  tipounidusosust: string | null;

  @Column("geometry", { name: "geom", nullable: true })
  geom: string | null;

  @Column("integer", { name: "id_produtor", nullable: true })
  idProdutor: number | null;

  @Column("integer", { name: "id_elementoprodutor", nullable: true })
  idElementoprodutor: number | null;

  @Column("integer", { name: "cd_insumo_orgao", nullable: true })
  cdInsumoOrgao: number | null;

  @Column("smallint", { name: "nr_insumo_mes", nullable: true })
  nrInsumoMes: number | null;

  @Column("smallint", { name: "nr_insumo_ano", nullable: true })
  nrInsumoAno: number | null;

  @Column("character varying", {
    name: "tx_insumo_documento",
    nullable: true,
    length: 60,
  })
  txInsumoDocumento: string | null;
}
