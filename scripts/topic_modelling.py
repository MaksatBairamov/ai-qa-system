from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation

def topic_modeling(documents):
    vectorizer = CountVectorizer(stop_words='english')
    doc_term_matrix = vectorizer.fit_transform(documents)
    
    lda = LatentDirichletAllocation(n_components=5, random_state=0)
    lda.fit(doc_term_matrix)
    topics = lda.components_
    
    return topics

documents = ["Document example one", "Document example two"]
topics = topic_modeling(documents)
print("Extracted topics:", topics)
