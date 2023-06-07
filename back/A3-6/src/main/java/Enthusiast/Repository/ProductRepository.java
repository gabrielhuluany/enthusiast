package Enthusiast.Repository;

import Enthusiast.Model.Product;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "SELECT nome FROM product p WHERE p.nome = ?", nativeQuery = true)
    public String verifyUniqueNome(String nome);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM product p WHERE p.nome = ?", nativeQuery = true)
    public int deleteProductByNome(String nome);

    @Modifying
    @Transactional
    @Query(value = "UPDATE product e SET e.preco = ?2 WHERE nome = ?1", nativeQuery = true)
    public int updatePrecoByNome(String nome, BigDecimal preco);

    @Modifying
    @Transactional
    @Query(value = "UPDATE product e SET e.quantidade = ?2 WHERE nome = ?1", nativeQuery = true)
    public int updateQuantidadeByNome(String nome, Integer quantidade);

    @Modifying
    @Transactional
    @Query(value = "UPDATE product e SET e.categoria = ?2 WHERE nome = ?1", nativeQuery = true)
    public int updateCategoriaByNome(String nome, String categoria);

    @Query(value = "SELECT nome FROM product p WHERE p.id = ?", nativeQuery = true)
    public String findNomeById(Integer id);

    @Query(value = "SELECT descricao FROM product p WHERE p.id = ?", nativeQuery = true)
    public String findDescricaoById(Integer id);

    @Query(value = "SELECT preco FROM product p WHERE p.id = ?", nativeQuery = true)
    public String findPrecoById(Integer id);

    @Query(value = "SELECT quantidade FROM product p WHERE p.id = ?", nativeQuery = true)
    public String findQuantidadeById(Integer id);

    @Query(value = "SELECT caminhoIMG FROM product p WHERE p.id = ?", nativeQuery = true)
    public String findCaminhoImgById(Integer id);

}

