package Enthusiast.Controller;

import Enthusiast.Model.Product;
import Enthusiast.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/product", produces = "application/json")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping(path = "/all")
    @ResponseStatus(HttpStatus.OK)
    public String[] getAllProducts(@RequestBody Product product) {
        //return productRepository.findAll();

        String nome = productRepository.findNomeById(product.getId());
        String descricao = productRepository.findDescricaoById(product.getId());
        String preco = productRepository.findPrecoById(product.getId());
        String quantidade = productRepository.findQuantidadeById(product.getId());
        String caminhoIMG = productRepository.findCaminhoImgById(product.getId());

        String[] dados = {
            nome,
            descricao,
            preco,
            quantidade,
            caminhoIMG
        };

        return dados;
    }

    @PostMapping(path="/add")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public String AddProduct (@RequestBody Product product) {

        String uniqueNome = productRepository.verifyUniqueNome(product.getNome());

        if (uniqueNome != null) {
            return "Erro: Nome já cadastrado";
        }

        productRepository.save(product);

        return "Produto adicionado ao estoque com sucesso";
    }

    @DeleteMapping(path="del")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String deleteProduct (@RequestBody Product product) {

        int bool = productRepository.deleteProductByNome(product.getNome());
        System.out.println(bool);
        if (bool == 1) {
            return "Produto deletado com sucesso";
        } else {
            return "erro 404";
        }
    }

    @PatchMapping(path="attPreco")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String atualizarPreco(@RequestBody Product product) {

        int bool = productRepository.updatePrecoByNome(product.getNome(), product.getPreco());
        if (bool == 1) {
            return "Preço atualizado com sucesso";
        } else {
            return "erro 404";
        }
    }

    @PatchMapping(path="attQuantidade")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String atualizarQuantidade(@RequestBody Product product) {

        int bool = productRepository.updateQuantidadeByNome(product.getNome(), product.getQuantidade());
        if (bool == 1) {
            return "Quantidade atualizada com sucesso";
        } else {
            return "erro 404";
        }
    }

    @PatchMapping(path="attCategoria")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String atualizarCategoria(@RequestBody Product product) {

        int bool = productRepository.updateCategoriaByNome(product.getNome(), product.getCategoria());
        if (bool == 1) {
            return "Categoria atualizada com sucesso";
        } else {
            return "erro 404";
        }
    }


}
