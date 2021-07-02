package br.org.generation.projetointegrador.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_tema")
public class Tema {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 2, max = 15)
	private String temaPostagem;
	
	@NotNull
	@Size(min = 2, max = 50)
	private String ambientacao; // area interna e externa
	
	@NotNull
	@Size(min = 2, max = 50)
	private String palavraChave;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTemaPostagem() {
		return temaPostagem;
	}

	public void setTemaPostagem(String temaPostagem) {
		this.temaPostagem = temaPostagem;
	}

	public String getAmbientacao() {
		return ambientacao;
	}

	public void setAmbientacao(String ambientacao) {
		this.ambientacao = ambientacao;
	}

	public String getPalavraChave() {
		return palavraChave;
	}

	public void setPalavraChave(String palavraChave) {
		this.palavraChave = palavraChave;
	}
	
	
	


}
