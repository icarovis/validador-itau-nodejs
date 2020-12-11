const Cliente = require('../../models/cliente')
 
describe('Clientes', ()=> {
  it('Validar os atributos de um cliente, ID, Nome, CPF', async () => {
    let cliente = new Cliente(1, 'Danilo', '2332322332322');
    expect(cliente.id).toEqual(1)
    expect(cliente.nome).toEqual("Danilo")
    expect(cliente.cpf).toEqual("2332322332322")
  });


  it('CPF válido', async () => {
    let cliente = new Cliente(1, 'Danilo', '709.251.970-50');
    expect(cliente.validarCPF()).toEqual(true)
  });

  it('CPF inválido 1111111111', async () => {
    let cliente = new Cliente(1, 'Danilo', '111.111.111-11');
    expect(cliente.validarCPF()).toEqual(false)
  });

  it('CPF caracter maior que 11 digitos', async () => {
    let cliente = new Cliente(1, 'Danilo', '111.111.111-1111111');
    expect(cliente.validarCPF()).toEqual(false)
  });

  it('CPF inválido', async () => {
    let cliente = new Cliente(1, 'Danilo', '709.251.970-51');
    expect(cliente.validarCPF()).toEqual(false)
  });
})