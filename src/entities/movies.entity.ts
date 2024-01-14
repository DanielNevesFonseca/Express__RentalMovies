import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Aqui se cria uma classe que será traduzida em um tabela SQL

@Entity("movies")
class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 50, unique: true })
  name: string;

  @Column({ type: "text", nullable: true, default: null })
  description: string;

  @Column({ type: "integer" })
  duration: number;

  @Column({ type: "integer" })
  price: number;

}

export default Movie;
