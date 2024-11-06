from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation

# Function to perform topic modeling on a list of documents
def topic_modeling(documents):
    vectorizer = CountVectorizer(stop_words='english')
    doc_term_matrix = vectorizer.fit_transform(documents)
    
    # Using Latent Dirichlet Allocation to find topics
    lda = LatentDirichletAllocation(n_components=5, random_state=0)
    lda.fit(doc_term_matrix)
    topics = lda.components_
    
    return topics

# Example documents to test the topic modeling
documents = ["Document example one", "Document example two"]
topics = topic_modeling(documents)
print("Extracted topics:", topics)
