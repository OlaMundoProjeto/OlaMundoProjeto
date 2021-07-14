package br.org.generation.projetointegrador.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

import br.org.generation.projetointegrador.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	public Optional<Usuario> findByUsuario(String usuario);	
	
	public List<Usuario> findAllByNomeContainingIgnoreCase (String nome);
	
	public Usuario findByNome(String nome);
	
}
