import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.output_parsers import StrOutputParser
from langchain_community.document_loaders import TextLoader

load_dotenv()

api_key = os.getenv("key")
model = "deepseek-r1-distill-llama-70b"
deepseek = ChatGroq(api_key=api_key, model_name=model)

Parser = StrOutputParser()
deepseek_chain = deepseek | Parser

loader = TextLoader("data.txt", encoding="utf-8")
data = loader.load()

template = """
You are Ejisuman Senior High School AI-powered chatbot designed to provide information and assistance for people based on the context provided to you only. Don't in any way make things up.
context: {context}
question: {question}
"""

question = "Are there opportunities for students to attend sports camps?"
final_template = template.format(context=data, question=question)
answer = deepseek_chain.invoke(final_template)
print(answer)

html_file_path = os.getenv('HTML_FILE_PATH')

def link_files_to_html():
    with open('requirements.txt', 'r') as req_file, open('data.txt', 'r') as data_file, open(html_file_path, 'a') as html_file:
        requirements = req_file.read()
        data = data_file.read()
        html_file.write(f"<div id='requirements'><h2>Requirements</h2><pre>{requirements}</pre></div>")
        html_file.write(f"<div id='data'><h2>Data</h2><pre>{data}</pre></div>")

if __name__ == "__main__":
    link_files_to_html()