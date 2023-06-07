package Enthusiast.Controller;

import Enthusiast.Model.User;
import Enthusiast.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user", produces = "application/json")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/dados")
    @ResponseStatus(HttpStatus.OK)
    public String[] getUserDados(@RequestBody User user) {

        String nome = userRepository.findNomeByUser(user.getUser());
        String email = userRepository.findEmailByUser(user.getUser());

        String[] dados = {
            nome,
            email
        };

        return dados;
    }

    @PostMapping(path = "/add")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public String addUser(@RequestBody User user) {

        String uniqueEmail = userRepository.verifyUniqueEmail(user.getEmail());
        String uniqueUser = userRepository.verifyUniqueUser((user.getUser()));

        if (uniqueEmail != null || uniqueUser != null) {
            return "Erro: Email/User já cadastrados";
        }

        userRepository.save(user);

        return "Cadastro realizado com sucesso";
    }

    @PostMapping(path = "/logIn")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String logIn(@RequestBody User user) {

        String confirmaSenha = userRepository.findSenhaByUser(user.getUser());

        if (confirmaSenha == null) {
            return "Credenciais Incorretas";
        }

        if (confirmaSenha.equals(user.getSenha())) {
            return "Credenciais Corretas";
        } else {
            return "Credenciais Incorretas";
        }
    }

    @DeleteMapping(path = "/del")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String deleteUser(@RequestBody User user) {

        String verificaSenha = userRepository.findSenhaByUser(user.getUser());

        System.out.println(verificaSenha);
        System.out.println(user.getSenha());

        if(verificaSenha.equals(user.getSenha())) {
            int bool = userRepository.deleteByUser(user.getUser());
            if (bool == 1) {
                return "Conta deletada";
            } else {
                return "erro 404";
            }
        } else {
            return "Senha incorreta";
        }
    }

    @PatchMapping(path = "attSenha")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String atualizarSenha(@RequestBody User user) {

        System.out.println(user.getUser() + ", " + user.getSenha() + " e " + user.getNovaSenha());

        String senhaAtual = userRepository.findSenhaByUser(user.getUser());

        if (senhaAtual == null) {
            return "senha null";
        }

        if (senhaAtual.equals(user.getSenha())) {

            int bool = userRepository.UpdatePasswordByUser(user.getNovaSenha(), user.getUser());
            if (bool == 1) {
                return "Senha atualizada";
            } else {
                return "erro 404";
            }
        } else {
            return "senha errada";
        }


    }

}
