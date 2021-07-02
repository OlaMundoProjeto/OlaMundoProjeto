package br.org.generation.projetointegrador.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_temaOlaMundo")
public class Tema {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 2, max = 15)
	private String tema_da_postagem;
	
	@NotNull
	@Size(min = 2, max = 50)
	private String ambientacao; // area interna e externa
	
	@NotNull
	@Size(min = 2, max = 15)
	private String palavra_chave;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTema_da_postagem() {
		return tema_da_postagem;
	}

	public void setTema_da_postagem(String tema_da_postagem) {
		this.tema_da_postagem = tema_da_postagem;
	}

	public String getAmbientacao() {
		return ambientacao;
	}

	public void setAmbientacao(String ambientacao) {
		this.ambientacao = ambientacao;
	}

	public String getPalavra_chave() {
		return palavra_chave;
	}

	public void setPalavra_chave(String palavra_chave) {
		this.palavra_chave = palavra_chave;
	}
	
	
	


}
