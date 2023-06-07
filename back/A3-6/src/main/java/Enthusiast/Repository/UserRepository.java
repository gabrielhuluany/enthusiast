package Enthusiast.Repository;

import Enthusiast.Model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT nome FROM user e WHERE e.user = ?", nativeQuery = true)
    public String findNomeByUser(String user);

    @Query(value = "SELECT email FROM user e WHERE e.user = ?", nativeQuery = true)
    public String findEmailByUser(String user);

    @Query(value = "SELECT senha FROM user e WHERE e.user = ?", nativeQuery = true)
    public String findSenhaByUser(String user);

    @Query(value = "SELECT email FROM user e WHERE e.email = ?", nativeQuery = true)
    public String verifyUniqueEmail(String email);

    @Query(value = "SELECT e.user FROM user e WHERE e.user = ?", nativeQuery = true)
    public String verifyUniqueUser(String user);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM user e WHERE e.user = ?", nativeQuery = true)
    public int deleteByUser(String user);

    @Modifying
    @Transactional
    @Query(value = "UPDATE user e SET e.senha = ?1 WHERE user = ?2", nativeQuery = true)
    public int UpdatePasswordByUser(String senha, String user);
}
