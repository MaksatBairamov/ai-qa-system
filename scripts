from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation

def topic_modeling(documents):
    vectorizer = CountVectorizer(stop_words='english')
    doc_term_matrix = vectorizer.fit_transform(documents)
    lda = LatentDirichletAllocation(n_components=5, random_state=0)
    lda.fit(doc_term_matrix)
    topics = lda.components_
    return topics

documents = ["Example document 1", "Example document 2"]
topics = topic_modeling(documents)
print(topics)
