from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation

def topic_modeling(documents):
    vectorizer = CountVectorizer(stop_words='english')
    doc_term_matrix = vectorizer.fit_transform(documents)
    
    lda = LatentDirichletAllocation(n_components=5, random_state=0)
    lda.fit(doc_term_matrix)
    topics = lda.components_
    
    return topics

# Тестування з парою прикладів
documents = ["Це приклад документу номер один", "І тут у нас документ номер два"]
topics = topic_modeling(documents)
print("Видобуті теми:", topics)
