import { Column, Entity, Index } from "typeorm";

@Index("enc_est_gerad_energia_eletrica_p_pkey", ["idObjeto"], { unique: true })
@Entity("enc_est_gerad_energia_eletrica_p", { schema: "bcim" })
export class EncEstGeradEnergiaEletricaP {
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

  @Column("character varying", {
    name: "codigoestacao",
    nullable: true,
    length: 30,
  })
  codigoestacao: string | null;

  @Column("integer", { name: "potenciaoutorgada", nullable: true })
  potenciaoutorgada: number | null;

  @Column("integer", { name: "potenciafiscalizada", nullable: true })
  potenciafiscalizada: number | null;

  @Column("character varying", {
    name: "operacional",
    nullable: true,
    length: 12,
  })
  operacional: string | null;

  @Column("text", { name: "situacaofisica", nullable: true })
  situacaofisica: string | null;

  @Column("character varying", {
    name: "tipoestgerad",
    nullable: true,
    length: 15,
  })
  tipoestgerad: string | null;

  @Column("character varying", {
    name: "destenergelet",
    nullable: true,
    length: 56,
  })
  destenergelet: string | null;

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
