import { ChangeEvent, useState } from "react"

type InputData = {
  name: string
  isActive: boolean
  size: number
}

function Input() {
  const [inputList, setInputList] = useState<InputData[]>([])
  const [xmlTree, setXMLTree] = useState<XMLDocument | null>(null)

  const handleClick = () => {
    const novoInputData: InputData = {
      name: "Mo",
      isActive: true,
      size: 10
    }
    setInputList([novoInputData, ...inputList])
  }

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    // Pega lista de arquivos do input
    const files = event.target.files

    // Arquivos pode estar vazio, entao a gente checa se nao esta
    if (files) {
      // Como so aceitamos um arquivo no input, ele vai ser o primeiro da lista
      const file = files[0]

      // Só queremos arquivos XML, então recusamos qualquer coisa que nao seja XML
      if (file.type !== "text/xml") {
        console.error("Wrong file type!")
        return
      }

      // Usamos o await pra ler o conteudo do arquivo em texto
      const content = await file.text()

      // Damos uma olhada no arquivo
      console.log(content)

      // Instanciamos um parser que vai ler a arvore do XML
      const domParser = new DOMParser()
      // Usamos o parser para extrar a arvore em uma variavel
      const tree = domParser.parseFromString(content, file.type)

      // Damos uma olhada na estrutura da arvore
      // console.log(tree, tree.getElementsByTagName("name")[1].textContent,
      //   tree.getElementsByTagName("name").item(tree.getElementsByTagName("name").length - 1), tree.getElementsByTagName("name").length,
      //   tree.getElementsByTagName("name"))


      // Salva o documento na o estado xmlTree
      setXMLTree(tree)



    } else {
      // Aqui é o que acontece se o usuario nao selecionou um arquivo
      console.error("No file detected!")
    }
  }

  return (
    <div>
      <button onClick={handleClick}>adicionar</button>
      <input type="file" name="package" onChange={handleFileUpload} />
      <ul>
        {inputList.map((inputData) => <li>{inputData.name}</li>)}
      </ul>
    </div>
  )
}

export default Input
